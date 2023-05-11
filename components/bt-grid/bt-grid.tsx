import React from "react";
import clsx from "clsx";

type colSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";

interface IRowProps {
  children: React.ReactNode;
  className?: string;
}

function Row({ children, className, ...props }: IRowProps) {
  return (
    <div className={clsx("row", "row-gap-3", className)} {...props}>
      {children}
    </div>
  );
}

interface IColProps {
  sm?: colSize;
  md?: colSize;
  lg?: colSize;
  children: React.ReactNode;
  className?: string;
}

function Col({ sm, md, lg, children, className, ...props }: IColProps) {
  const classNames = [];

  if (sm) classNames.push(`col-sm-${sm}`);
  if (md) classNames.push(`col-md-${md}`);
  if (lg) {
    classNames.push(`col-lg-${lg}`);
    classNames.push(`col-xl-${lg}`);
    classNames.push(`col-xxl-${lg}`);
  }
  if (className) classNames.push(className);

  return (
    <div className={clsx("col", "col-12", classNames)} {...props}>
      {children}
    </div>
  );
}

export const BtGrid = { Row, Col };
