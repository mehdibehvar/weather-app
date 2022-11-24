import { MoonLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "deeppink",
};
export default function Loading({size}) {
    return (
      <div className="sweet-loading">
        <MoonLoader
          color={"deeppink"}
          loading={true}
          cssOverride={override}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }