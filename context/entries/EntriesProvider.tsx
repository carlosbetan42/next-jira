import { FC, useReducer, PropsWithChildren, useEffect } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces";
import entriesApi from "../../apis/entriesApi";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", { description });

      dispatch({ type: "[Entry] - Add-Entry", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });

      dispatch({ type: "[Entry] - Entry-Updated", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const refreshEntries = async () => {
    try {
      const { data } = await entriesApi.get<Entry[]>("/entries");

      dispatch({ type: "[Entry] - Refresh-Data", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
