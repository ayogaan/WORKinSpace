"use client";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { getSpaces } from "../../services/SpaceServices";
import { useEffect } from "react";
import {useRouter} from 'next/navigation';

const columns: GridColDef<(any)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "name",
    width: 150,
  },
  {
    field: "type",
    headerName: "type",
    width: 150,
  },
  {
    field: "price_per_day",
    headerName: "price per day",
    type: "number",
    width: 110,
  },
  {
    field: "total_seats",
    headerName: "total seats",
    type: "number",
    width: 110,
  },
];

export default function DataGridDemo() {
  const [spaces, setSpaces] = useState<any[]>([]);
  const router = useRouter();
  const getData = async () => {
    try {
      const spaces = await getSpaces();
      setSpaces(spaces);

      console.log("Fetched spaces:", spaces);
    } catch (error) {
      console.error("Failed to fetch spaces:", error);
      return [];
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const handleSelectionChange = (newSelection: any) => {
    const selectedIDs = newSelection.ids;
    setSelectedRows([...selectedIDs]);
  };
  return (
    <div className="p-5">
      <div className="mb-3 text-gray-700">Admin | Spaces</div>
      <div className="flex justify-between gap-3 w-full mb-3">
        <div className="">
          <button onClick={() => router.push("/admin/spaces/create")} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 shadow">
            <span>Create</span>
          </button>
        </div>
        <div className="flex gap-3">
          {selectedRows.length > 0 && (
            <div className="">
              <button className="bg-yellow-600 text-white px-2 py-1 shadow">
                <span>Edit</span>
              </button>
            </div>
          )}

          {selectedRows.length === 1 && (
            <div className="">
              <button className="bg-red-600 text-white px-2 py-1 shadow">
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={spaces} // ✅ use dynamic API data
            columns={columns} // ✅ use your defined columns
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            onRowSelectionModelChange={handleSelectionChange}
          />
        </Box>
      </div>
    </div>
  );
}
