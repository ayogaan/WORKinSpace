import TextField from "@mui/material/TextField";
import DropImage from "./components/DropImage";
export default function Create() {
  return (
    <div className="p-5">
      <div>
        <h1 className="text-lg font-semibold">Location Profile</h1>
      </div>
      <div className="mt-5 w-full">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // default
              },
              "&:hover fieldset": {
                borderColor: "black", // optional: still black on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray", // blue when focused
              },
            },
          }}
        />
      </div>
      <div className="mt-5 w-full">
        <TextField
          id="outlined-basic"
          label="Type"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // default
              },
              "&:hover fieldset": {
                borderColor: "black", // optional: still black on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray", // blue when focused
              },
            },
          }}
        />
      </div>
      <div className="mt-5 w-full">
        <TextField
          id="outlined-basic"
          label="Google Maps Link"
          type="text"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // default
              },
              "&:hover fieldset": {
                borderColor: "black", // optional: still black on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray", // blue when focused
              },
            },
          }}
        />
      </div>

      <div className="mt-5 w-full">
        <TextField
          id="outlined-basic"
          label="Services"
          type="text"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // default
              },
              "&:hover fieldset": {
                borderColor: "black", // optional: still black on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray", // blue when focused
              },
            },
          }}
        />
      </div>

      <div className="mt-5 w-full">
        <TextField
          label="Description"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // default
              },
              "&:hover fieldset": {
                borderColor: "black", // optional: still black on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray", // blue when focused
              },
            },
          }}
        />
      </div>

      <div className="gallery mt-5">
        <h2 className="text-md font-semibold mb-3">Gallery</h2>
        <div className="grid grid-cols-2 gap-5">
          <DropImage />
          <DropImage />
          <DropImage />
          <DropImage />
        </div>
      </div>
      <button className="w-full bg-blue-900 text-white px-4 py-3 text-md rounded-md mt-5">
        <span>Create</span>
      </button>
    </div>
  );
}
