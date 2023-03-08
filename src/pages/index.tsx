import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col text-center items-center content-center justify-center px-4">
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-black">
          Create the password of your choice
        </h1>
        <div className="items-start">
          <div className="space-y-2">
            <h1>1.Select the length you want your password to be:</h1>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select the length
              </option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
          <div>
            <h1>2.Select the character sets for your password:</h1>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
          </div>
          <div className="space-y-4 py-2">
            <h1>3.Click the generate button to generate your password:</h1>
            <button className="btn btn-primary">Generate Password</button>
          </div>
          <div className="space-y-4 py-2">
            <h1>4.Copy your password to clipboard:</h1>
            <button className="btn btn-primary">Copy Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}
