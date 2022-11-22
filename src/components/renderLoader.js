import { MoonLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};
export default function Loading() {
    return (
      <div className="sweet-loading">
        <MoonLoader
          color={"red"}
          loading={true}
          cssOverride={override}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }