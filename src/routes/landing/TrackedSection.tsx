import _ from 'lodash';
import React from 'react';
import { saveActivityLog } from '../../common/utils';

export class TrackedSection extends React.Component<any, any> {
  public state = {
    viewPercentage: 0
  };
  public componentDidMount() {
    this.sectionRef = React.createRef();
    window.addEventListener('scroll', this.fireOnCentered);
  }
  private sectionRef: any;

  private checkCenter = () => {
    const viewPortTopPos = window.scrollY;
    const viewPortBottomPos = viewPortTopPos + window.innerHeight;
    const sectionTopPos = _.get(this.sectionRef, 'current.offsetTop');
    const sectionBottomPos =
      sectionTopPos + _.get(this.sectionRef, 'current.offsetHeight');
    const sectionHeight = sectionBottomPos - sectionTopPos;

    const overlapLength = getOverlapLength(
      viewPortTopPos,
      viewPortBottomPos,
      sectionTopPos,
      sectionBottomPos
    );

    const viewPercentage = Math.floor((overlapLength * 100) / sectionHeight);

    this.setState({
      viewPercentage: isNaN(viewPercentage) ? 0 : viewPercentage
    });
  };

  public async componentDidUpdate(prevProps, prevState) {
    if (prevState.viewPercentage === 0 && this.state.viewPercentage === 0) {
      return;
    }

    const rangeLen = 100 / this.props.logDiv;
    const ranges = _.times(this.props.logDiv, i => [
      Math.ceil(i * rangeLen),
      Math.ceil((i + 1) * rangeLen)
    ]);

    const prevDiv = _.findIndex(ranges, it =>
      isInRange(prevState.viewPercentage, _.first(it), _.last(it))
    );
    const currDiv = _.findIndex(ranges, it =>
      isInRange(this.state.viewPercentage, _.first(it), _.last(it))
    );

    if (prevDiv !== currDiv) {
      console.log(`UPDATED ${this.props.id} ${prevDiv}====>${currDiv}`);
      await saveActivityLog({
        compId: this.props.id,
        type: 'SCROLL',
        data: {
          prevDivision: prevDiv,
          currDivision: currDiv
        },
        createdAt: Date.now()
      });
    }
  }

  private fireOnCentered = _.throttle(this.checkCenter, 100);

  public render() {
    // console.log(`id: ${this.props.id}: ${this.state.viewPercentage}%`);
    return <section ref={this.sectionRef}>{this.props.children}</section>;
  }
}

function isInRange(num, start, end) {
  return start < num && num <= end;
}

function getOverlapLength(aStart, aEnd, bStart, bEnd) {
  const result = getOverlapRange(
    {
      start: aStart,
      end: aEnd
    },
    {
      start: bStart,
      end: bEnd
    }
  );

  return result ? result.end - result.start : 0;
}

function getOverlapRange(a, b) {
  const rangeMin = a.start < b.start ? a : b;
  const rangeMax = rangeMin === a ? b : a;

  if (rangeMin.end < rangeMax.start) {
    return;
  }

  return {
    start: rangeMax.start,
    end: rangeMin.end < rangeMax.end ? rangeMin.end : rangeMax.end
  };
}
