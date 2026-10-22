module.exports = mongoose => {
  const Schema = mongoose.Schema;

  const DestinationSchema = new Schema({
    nom: { type: String, required: true },
    pays: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }
  }, {
    timestamps: true
  });

  DestinationSchema.method('toJSON', function () {
    const { _id, __v, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Destination = mongoose.model('Destination', DestinationSchema);
  return Destination;
};