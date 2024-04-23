// hooks.ts
import { useDispatch as useReduxDispatch } from "react-redux";
import type { AppDispatch } from "./store";

// Create a custom typed version of useDispatch
export const useDispatch = () => useReduxDispatch<AppDispatch>();
