import {
  Sample,
  isSamples,
} from '../entity/Sample';

const dummy = [{
  id: 1,
  title: 'test'
}];

const GetSample = async (): Promise<Sample[]> => {
  const resDatas = dummy
  if (isSamples(resDatas)) {
    return resDatas;
  }

  return [];
};

export default GetSample;
