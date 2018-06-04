// for test site

var manifestTable = {
    tableName: "test-tx-manifest",
    region: "us-west-2",
    readonly: "AKIAINUPRVAKZMNMGJSA",
    access: "Hv9UudcvgEAP7X13kZFqR6J14vPyC3YScDVndv0W"
};

function getManifestTable() {
    AWS.config.update({
        region: manifestTable.region,
        accessKeyId: manifestTable.readonly,
        secretAccessKey: manifestTable.access
    });

    return manifestTable.tableName;
}

