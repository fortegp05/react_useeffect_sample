import { useEffect, useState } from 'react';
import { Sample } from '../data/entity/Sample';
import GetSamples from '../data/sources/Samples';

const useGetSoftwareDevelopments = (): Sample[] => {
  const [softwareDevelopments, setSowtwareDevelopments] = useState<
  Sample[]
  >([]);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setSowtwareDevelopments(await GetSamples());
    };

    void load();
  }, []);

  return softwareDevelopments;
};

export default useGetSoftwareDevelopments;
