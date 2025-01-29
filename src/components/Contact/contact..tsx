import Axios from "axios";
import { Form, useFormSchema } from "../../Hook/useFormSchema";
import { useMutation } from "@tanstack/react-query";

export function Contact() {
  const { error, setError, handleSubmit, register, reset } = useFormSchema();

  const mutation: any = useMutation({
    mutationFn: async (data: Form) => {
      const response = await Axios.post("https://six-tech-server.onrender.com/send", data);
      return response.data;
    },
    onSuccess: () => {
      reset();
      setError("Sent Successfully!");
      setTimeout(() => setError(""), 2000);
    },
    onError: () => {
      setError("Error Occurred!");
      setTimeout(() => setError(""), 2000);
    },
  });


  const onSubmit = (data: Form) => {
    mutation.mutate(data);
  };

  return (
    <div className="contact">
      <div className="contact_main wrapper small">
        <div className="left">
          <h1 data-animation="header">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="top">
              <input type="email" placeholder="your email" {...register("email")} required />
              <input type="text" placeholder="your name" {...register("name")} required />
            </div>
            <div className="bottom">
              <textarea placeholder="your message" {...register("message")} required></textarea>
            </div>
            <p
              style={{
                color: error === "Sent Successfully!" ? "green" : "red",
                fontSize: "14px",
              }}
              className="p-error"
            >
              {error}
            </p>
            <input 
            type="submit" 
            value={mutation.isPending ? "Sending..." : "Send Message"} 
            disabled={mutation.isPending} 
            />
          </form>
        </div>

        <div className="right">
          <div className="map">
            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lastminute.com%20London%20Eye,%20Riverside%20Building,%20County%20Hall,%20London%20SE1%207PB,%20United%20Kingdom+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
