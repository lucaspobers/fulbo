import Team from "../models/team.model.js";


export const getTeams = async (req, res) => {
    try {
        const teams = await Team.find({
            user: req.user.payload.id
        });
        res.status(200).json(teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const getTeam = async (req, res) => {
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found" });

    res.json(team);
};
export const createTeam = async (req, res) => {
    console.log(req.user);

    const { clubName } = req.body;
    const newTeam = new Team({ clubName, user: req.user.payload.id });
    try {
        await newTeam.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
export const updateTeam = async (req, res) => {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!team) return res.status(404).json({ message: "Team not found" });

    res.json(team);
};
export const deleteTeam = async (req, res) => {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found" });

    res.status(200).json({ message: "Team deleted successfully" });
};

/* 
    const teams = await Team.find({
        user: req.user.payload.id
    }).populate('user'); - Si utilizo el populate, los datos del usuario pasan a la bbdd, y no solo el id del usuario.

*/
