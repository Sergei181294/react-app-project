import { FC } from "react";
import "./styles.modules.scss";

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: FC<LoaderProps> = ({ isLoading }) =>
  isLoading ? (
    <div className="lds-circle">
      <div></div>
    </div>
  ) : null;
