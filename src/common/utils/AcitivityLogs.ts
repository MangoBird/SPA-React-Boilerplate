import axios from 'axios';
import _ from 'lodash';
import { getApi } from './GetApi';
import { getCookie, loadState, saveState } from './LocalStorage';

export const saveActivityLog = async (log?) => {
  let activity = loadState('activity');
  activity = activity ? activity : { logs: [] };
  log && activity.logs.push(log);
  console.log('SAVIING', activity);
  saveState('activity', activity);

  if (activity.logs.length > 50) {
    await updateActivityLog(0);
  }
};

export const deleteActivityLog = () => {
  const activity = loadState('activity') || {};
  _.set(activity, 'logs', []);
  console.log('DELETING', activity);
  saveState('activity', activity);
};

export const updateActivityLog = async count => {
  const sessionId = getCookie('sessionId');
  const activity = loadState('activity');
  // !activity && (await postActivityLog(0));
  try {
    const payload = {
      sessionId,
      logs: activity.logs
    };
    console.log('@@@@@@', payload);
    const { status } = await getApi().put('/activity', {
      sessionId,
      logs: activity.logs
    });
    if (status !== 200) {
      throw new Error('UPDATE_ACTIVIE_LOG_FAILED');
    }
    deleteActivityLog();
  } catch (err) {
    count < 5 && (await updateActivityLog(count + 1));
  }
};
