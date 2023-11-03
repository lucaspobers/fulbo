import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
    clubName: {
        type: String,
        required: true
    },
    colour: {
        firstColour: {
            type: String,
            default: 'white'
        },
        secondColour: {
            type: String,
            default: 'black'
        }
    },
    points: {
        type: Number,
        default: 0
    },
    played: {
        type: Number,
        default: 0
    },
    goalsFor: {
        type: Number,
        default: 0
    },
    goalsAgainst: {
        type: Number,
        default: 0
    },
    goalsDifference: {
        type: Number,
        default: 0
    },
    won: {
        type: Number,
        default: 0
    },
    drawn: {
        type: Number,
        default: 0
    },
    lost: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Team', teamSchema)

// En 'user' asociamos el equipo creado con el usuario que lo creó.
