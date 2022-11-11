import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

const useStore = () => {
  return useContext(MobXProviderContext);
};

export default useStore;
