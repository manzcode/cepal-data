import Button from "../../shared/components/Button";

type Props = {
  current: number;
  next: () => void;
  prev: () => void;
  isNext: number;
};

function Pagination({ current, next, prev, isNext }: Props) {
  return (
    <div className="flex justify-between w-full px-3">
      {current > 1 && (
        <div>
          <Button onClick={prev}>Previous</Button>
        </div>
      )}
      {isNext > 0 && (
        <div>
          <Button onClick={next}>Next</Button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
