"use client";
import TextField from "@mui/material/TextField";
import { createSpace } from "../../../services/SpaceServices";
import { Space } from "@/app/types/space";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";

export default function Create() {
  type NewSpace = Omit<Space, "id, company_id">;
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<"hot_desk" | "fixed_desk">("hot_desk");
  const [totalSeats, setTotalSeats] = useState<number>(0);
  const [pricePerDay, setPricePerDay] = useState<number>(0);
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      await createSpace({
        name: "New Space",
        type: "hot_desk",
        price_per_day: 100,
        total_seats: 10,
      } as NewSpace);
      router.push("/admin/spaces");
    } catch (error) {
      console.error("Error creating space:", error);
    }
  };

  return (
    <div className="p-5">
      <div className="mt-5 w-full">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={(e) =>
              setType(e.target.value as "hot_desk" | "fixed_desk")
            }
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
          >
            <MenuItem value={"hot_desk"}>Hot Desk</MenuItem>
            <MenuItem value={"fixed_desk"}>Fixed Desk</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mt-5 w-full">
        <TextField
          id="outlined-basic"
          label="Total Seats"
          type="number"
          variant="outlined"
          value={totalSeats}
          onChange={(e) => setTotalSeats(Number(e.target.value))}
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
          label="Price Per Day"
          type="number"
          variant="outlined"
          fullWidth
          value={pricePerDay}
          onChange={(e) => setPricePerDay(Number(e.target.value))}
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
      <button
        className="w-full bg-blue-900 text-white px-4 py-3 text-md rounded-md mt-5"
        onClick={handleSubmit}
      >
        <span>Create</span>
      </button>
    </div>
  );
}
