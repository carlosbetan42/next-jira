import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../database";
import { Entry, IEntry } from "../../../../models";

type Data =
  | {
      message: string;
    }
  | IEntry
  | null;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // const { id } = req.query;

  // if (!mongoose.isValidObjectId(id)) {
  //   return res.status(400).json({ message: "El id no es válido " + id });
  // }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);

    case "GET":
      return getEntry(req, res);

    case "DELETE":
      return removeEntry(req, res);

    default:
      return res.status(400).json({ message: "Método no existe" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const { id } = req.query;
  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "No hay entrada con ese id " + id });
  }

  const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true });
    res.status(200).json(updatedEntry);
  } catch (error: any) {
    await db.disconnect();
    console.log(error);
    res.status(400).json({ message: error.errors.status.message });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const { id } = req.query;
  const entryInDb = await Entry.findById(id);
  await db.disconnect();

  if (!entryInDb) {
    return res.status(400).json({ message: "No hay entrada con ese id " + id });
  }

  res.status(200).json(entryInDb);
};

const removeEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const { id } = req.query;

  try {
    await Entry.findByIdAndRemove(id);
    res.status(200).json({ message: "true" });
  } catch (error: any) {
    await db.disconnect();
    console.log(error);
    res.status(400).json({ message: error.errors.status.message });
  }
};
