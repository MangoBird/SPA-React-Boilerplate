const ENVS = {
  LOCAL: {
    DEEP_LINK: (id: string) => ``,
    API: ''
  },
  DEV: {
    DEEP_LINK: (id: string) => ``,
    API: ''
  },
  PROD: {
    DEEP_LINK: (id: string) => ``,
    API: ''
  }
};

export const ENV = {
  DEEP_LINK: ENVS.PROD.DEEP_LINK,
  API: ENVS.PROD.API
};
