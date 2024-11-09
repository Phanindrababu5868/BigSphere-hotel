import { create } from "zustand";

const useAppStore = create((set) => ({
  checkInDate: "",
  checkOutDate: "",
  rooms: 1,
  name: "",
  email: "",
  phone: "",
  adults: 1,
  children: 0,
  roomCostForChildren: 400,
  roomCostForAdults: 1000,
  totalCost: 0,
  setTotalCost: (cost) => set({ totalCost: cost }),
  setCheckInDate: (date) => set({ checkInDate: date }),
  setCheckOutDate: (date) => set({ checkOutDate: date }),
  setRooms: (rooms) => set({ rooms }),
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPhone: (phone) => set({ phone }),
  setAdults: (adults) => set({ adults }),
  setChildren: (children) => set({ children }),
}));

export default useAppStore;
