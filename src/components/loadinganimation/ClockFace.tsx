interface ClockFaceProps {
  time: string;
}

export const ClockFace = ({ time }: ClockFaceProps) => {
  return (
    <div className="loader">
      <div
        data-glitch={time}
        className="glitch text-6xl font-bold tracking-wide text-zinc-100 sm:text-8xl"
      >
        {time}
      </div>
    </div>
  );
};
