import { Router, json, urlencoded } from "express";
import controller from "../controllers/nationController.js";
import adminOnly from "../middlewares/admin.js";
const router = Router();

router.post("/add", adminOnly, json(), (req, res) => {
  controller.add(req, res);
});
router.post("/update", adminOnly, json(), (req, res) => {
  controller.update(req, res);
});
router.get("/all", (req, res) => {
  controller.all(req, res);
});
router.get("/:nation", urlencoded({ extended: true }), (req, res) => {
  controller.getNation(req, res);
});
router.get("/", (req, res) => {
  res.send("You should try /all or /brasil to see how it works")

})
export default router;
