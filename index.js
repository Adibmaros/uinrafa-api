import express from "express";
import fakultasRoutes from "./routes/fakultas.js";
import prodiRoutes from "./routes/prodi.js";
import fakultasProdiRoutes from "./routes/fakultasProdi.js";

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use("/api/fakultas", fakultasRoutes);
app.use("/api/prodi", prodiRoutes);
app.use("/api/fakultas-prodi", fakultasProdiRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
