const { User, Kitty } = require("../../models");
const router = require("express").Router();


router.get("/", async (req, res) => {
    try {
        const rawKittyData = await Kitty.findAll({
            include: [
                {
                    model: User,
                    as: "kitty_owner",
                    attributes: ["username"]
                },
            ]
        });
        const kittyData = rawKittyData.map((kitty) => kitty.get({ plain: true }));
        res.status(200).json(kittyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
  try {
    const kittyData = await Kitty.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "kitty_owner",
          attributes: ["username"]
      }
      ],
    });
    if (!kittyData) {
      res.status(404).json({ message: "No kitty found with this id!" });
      return;
    }
    res.status(200).json(kittyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
    try {
        const newGame = await Game.create({
          userId: req.session.user_id,
          gameName: req.body.gameName,
          gameSummary: req.body.gameSummary,
          gameArtwork: req.body.gameArtwork,
          gamePlatform: req.body.gamePlatform,
          gameGenre: req.body.gameGenre,
          gameTag: req.body.gameTag,
          gameESRB: req.body.gameESRB,
          gameReleased: req.body.gameReleased,
          gameRating: req.body.gameRating,
          gamePublisher: req.body.gamePublisher,
          gameDeveloper: req.body.gameDeveloper,
          gameWebsite: req.body.gameWebsite,
          gameStatus: req.body.gameStatus,
        });
        res.status(200).json(newGame);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedKitty = await Kitty.update({
            gameStatus: req.body.gameStatus,
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(updatedGame);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const deletedKitty = await Kitty.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json(deletedGame);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
