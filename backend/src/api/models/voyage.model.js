module.exports = mongoose => {
  const Schema = mongoose.Schema;

  const VoyageSchema = new Schema({
    titre: { type: String, required: true },
    prix: { type: Number, required: true },
    duree: { type: Number, required: true },
    dateDepart: { type: Date, required: true },
    description: { type: String, required: true },

    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Destination'
    }

  }, {
    timestamps: true
  });

  VoyageSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Voyage = mongoose.model('Voyage', VoyageSchema);
  return Voyage;
};