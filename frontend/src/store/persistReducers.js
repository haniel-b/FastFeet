import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeet', // Unique app key
      storage,
      whitelist: ['auth', 'user'], // Modules which gonna be kept
    },
    reducers
  );

  return persistedReducer;
};
