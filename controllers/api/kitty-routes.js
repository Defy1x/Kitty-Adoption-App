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

// router.put('/:id/favorite' async (req, res) => {
//   const { id } = req.params; // kitty id
//   const { userId } = req.session; // logged in user id
//   // find currently logged in user
//   const user = await User.findByPk( userId );
//   // add the kitty
//   user.addFavoriteKitty( id );
// })

router.get("/id/:id", async (req, res) => {
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

router.get("/location/:location", async (req, res) => {
  try {
    const location = req.params.location.replace("-", " ")
    const kittyData = await Kitty.findAll({
      where: {
        kittyLocation: location
      }
    })
    if (!kittyData) {
      res.status(404).json({ message: "No kitty found with this id!" });
      return;
    }
    res.status(200).json(kittyData);
    } catch (err) {
      res.status(500).json(err);
    }
})


router.post("/", async (req, res) => {
    try {
        const newKitty = await Kitty.create({
          userId: req.session.user_id,
          kittyName: req.body.kittyName,
          kittyFavorite: req.body.kittyFavorite,
          kittyStory: req.body.kittyStory,
          kittyPicture: req.body.kittyPicture,
          kittyBreed: req.body.kittyBreed,
          kittyWeight: req.body.kittyWeight,
          kittyColor: req.body.kittyColor,
          kittyLocation: req.body.kittyLocation,
          kittyPersonality: req.body.kittyPersonality,
          kittyAge: req.body.kittyAge,
          kittyKids: req.body.kittyKids,
          kittyPets: req.body.kittyPets,
        });
        res.status(200).json(newKitty);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedKitty = await Kitty.update({
            kittyFavorite: req.body.kittyFavorite,
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(updatedKitty);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const deletedKitty = await Kitty.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json(deletedKitty);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
