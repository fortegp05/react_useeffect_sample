export type Sample = {
  id: number;
  title: string;
};

const isSample = (arg: unknown): boolean => {
  const sd = arg as Sample;

  return (
    typeof sd.id === 'number' &&
    typeof sd.title === 'string' 
  );
};

const isSamples = (
  args: unknown[],
): args is Sample[] =>
  !args.some((arg) => !isSample(arg));

export { isSample, isSamples };
