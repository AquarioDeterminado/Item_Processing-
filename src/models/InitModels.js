const {Item} = require('./Item');
const {TrackedItem} = require('./TrackedItem');
const {User} = require("./User");
const {UntrackedItem} = require("./UntrackedItem");
const {ItemType} = require("./ItemType");
const {RecordType} = require("./RecordType");
const {Record} = require("./Record");
const {FileTemplate} = require("./FileTemplate");
const {Facture} = require("./Facture");
const {Department} = require("./Departement");
const {sequelize} = require("../configs/DBO");
const Permission = require("./Permission");
const Feature = require("./Feature");

function initModels(sequelize) {
    var item = Item;
    var trackedItem = TrackedItem;
    var feature = Feature;
    var user = User;
    var untrackedItem = UntrackedItem;
    var itemType = ItemType;
    var permission = Permission;
    var recordType = RecordType;
    var record = Record;
    var fileTemplate = FileTemplate;
    var facture = Facture;
    var department = Department;


    item.belongsTo(itemType);
    item.belongsToMany(facture, {through: 'facture_item'});

    trackedItem.belongsTo(item);

    user.hasMany(record);

    untrackedItem.belongsTo(item);

    recordType.hasMany(record);
    recordType.belongsTo(fileTemplate);

    record.belongsTo(recordType);
    record.belongsTo(user);
    record.belongsTo(item);

    fileTemplate.hasMany(recordType);

    facture.belongsToMany(item, {through: 'facture_item'});

    user.belongsToMany(feature, {through: Permission, foreignKey: 'user_id'});
    feature.belongsToMany(user, {through: Permission, foreignKey: 'feature_id'});

    department.hasMany(user);

    sequelize.sync({ force: false });


    return {
        Item: item,
        TrackedItem: trackedItem,
        User: user,
        UntrackedItem: untrackedItem,
        ItemType: itemType,
        RecordType: recordType,
        Record: record,
        FileTemplate: fileTemplate,
        Facture: facture,
        Department: department,
    };
}

const models = initModels(sequelize);
module.exports = {models: models, iniModels: initModels};