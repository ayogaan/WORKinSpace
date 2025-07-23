import TextField from "@mui/material/TextField";

export default function Register() {
  return (
    <div className="justify-center items-center flex h-screen bg-gray-100">
      <div className="w-96 bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-5">Register</h1>
        <div className="mt-5 w-full">
          <TextField
            id="outlined-basic"
            label="Company Name"
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
            label="Email"
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
            label="Password"
            type="password"
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
          <button className="w-full bg-blue-900 text-white px-4 py-3 text-md rounded-md">Register</button>
        </div>
      </div>
    </div>
  );
}