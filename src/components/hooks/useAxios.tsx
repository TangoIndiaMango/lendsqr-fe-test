import axios from "axios";

export default function useAxios() {

  async function axiosHandler<T, D = unknown>(
    url: string,
    method: string,
    data?: D,
    isAuthorized?: boolean,
    triggerError = true
  ): Promise<T | null> {
    // const token = localStorage.getItem(auth_token);
    const headers = {
      Authorization: `Bearer "restggfsdawerwre"`
    };
    const config = {
      headers: isAuthorized ? headers : {}
    };

    const result = await axios<T>({
      method: method,
      url: url,
      data: data,
      ...config
    }).catch((err) => {
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === 404) {
          if (triggerError) {
            console.log("Resource not found");
          }
        } else {
          const message =
            err.response.data.error ||
            "An error occurred while processing your request.";
          console.log(`Error: ${message}`);
        }
      } else {
        // Handle non-Axios errors
        console.log("An unexpected error occurred.", err);
      }
    });

    if (!result) {
      return null;
    }

    return result.data || (true as T);
  }

  return {
    axiosHandler
  };
}
