import * as React from "react";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className="relative h-2 w-full overflow-hidden rounded-full bg-gray-700"
        {...props}
      >
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress };
