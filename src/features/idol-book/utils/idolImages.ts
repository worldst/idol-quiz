const images = import.meta.glob(
  "@/assets/idols/*.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

export const idolImages = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const fileName = path.split("/").pop()!;
    const id = Number(fileName.split("_")[0]);

    return [id, url];
  }),
);