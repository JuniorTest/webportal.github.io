module.exports = (mongoose, mongoosePaginate) => {
    var schema = mongoose.Schema(
        {
            firstname: String,
            lastname: String,
            email: String,
            event_name: String,
            event_id: Number
        },
        { timestamps: false }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    schema.plugin(mongoosePaginate)

    const Event = mongoose.model("event", schema);
    return Event;
}