import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { DashboardContext, ContextProps } from "../../../entities/dashboard/context";
import { addSreenShoot } from "../api/addScreenShoot";
import { SreenShoot } from "../model/screenshoot";
import Spiner from "../../../shared/components/spiner";

function FormThree() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageError, setImageError] = useState(false);

  const context = useContext(DashboardContext);
  const {addScreenShoot: newScreenShoot} = context as ContextProps;
const { isPending,mutate } = useMutation({
    mutationFn: async (newScreen: Partial<SreenShoot>) =>
      await addSreenShoot(newScreen),
    onSuccess: (data: any) => {
      newScreenShoot(data.data);
      setImageUrl("")
      setImageError(false)
    },
  });

  const handleImageUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    setImageError(false);
  };

  const validateImageUrl = () => {
    const urlPattern =
    /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:(\d+))?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i
    if (!urlPattern.test(imageUrl)) {
      setImageError(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateImageUrl()) {
      mutate({screenshots: imageUrl })
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Sreenshoot
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
          {imageError && (
            <p className="text-red-500 mt-1">Please enter a valid URL</p>
          )}
        </div>
        {imageUrl && validateImageUrl() && (
          <div className="mb-4">
            <img className="w-full" src={imageUrl} alt="preview" />
          </div>
        )}
         {isPending ? (
          <Spiner />
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default FormThree;
