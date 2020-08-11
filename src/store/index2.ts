import tagStore from '@/store/tagStore';
import recordStore from '@/store/recodeStore';

const store = {
  ...recordStore,
  ...tagStore,
};

console.log(store);

export default store;