const documentText = `
License # RCE-51586 Email: JACustomTile@gmail.com Phone: (208) 570-7685 Website: JACustomTile.com

CONTACT INFO JOB INFO
Proposal submitted to: {{FirstName}} {{LastName}} Street: {{ClientStreet}}
Relationship: {{Relationship}} City: {{City}}
Phone: {{Phone}} State: Idaho
Email: {{Email}} Zip: {{Zip}}

{{FirstName}}, here is the proposal for the {{Project}} tile, as we discussed. Please read through it and don’t hesitate to reach out if you have any questions!

Subject to acceptance of this proposal by the deadline set forth following and to all conditions listed below, J&A Custom Tile proposes to perform all the work as listed below. This proposal may be withdrawn by us if not accepted within 30 days
{{TileOneSize}} {{TileOneDescription}} tile (Approx. {{TileOneSquareFootage}} square feet)
This tile is to be installed on {{LocationsOfTileOne}}. Exposed edges to be trimmed with {{EdgingTypeTileOne}}. This tile will be grouted with {{GroutType}} grout. Tile is to be set with a {{TileOnePattern}} pattern.

{{TileTwoSize}} {{TileTwoDescription}} tile (Approx. {{TileTwoSquareFootage}} square feet)
This tile is to be installed on {{LocationsOfTileTwo}}. Exposed edges to be trimmed with {{EdgingTypeTileTwo}}. This tile will be grouted with {{GroutType}} grout. Tile is to be set with a {{TileTwoPattern}} pattern.

{{TileThreeSize}}, {{TileThreeDescription}} tile (Approx. {{TileThreeSquareFootage}} square feet)
This tile is to be installed on {{LocationsOfTileThree}}. Exposed edges to be trimmed with {{EdgingTypeTileThree}}. This tile will be grouted with {{GroutType}} grout. Tile is to be set with a {{TileThreePattern}} pattern.

{{TileFourSize}}, {{TileFourDescription}} tile (Approx. {{TileFourSquareFootage}} square feet)
This tile is to be installed on {{LocationsOfTileFour}}. Exposed edges to be trimmed with {{EdgingTypeTileFour}}. This tile will be grouted with {{GroutType}} grout. Tile is to be set with a {{TileFourPattern}} pattern.
`;

const placeholders = documentText.match(/{{\w+}}/g);
const formContainer = document.getElementById("inputForm");
const documentPreview = document.getElementById("documentPreview");

placeholders.forEach((placeholder) => {
  const label = document.createElement("label");
  label.innerHTML = placeholder.replace(/{{|}}/g, "") + ": ";

  const input = document.createElement("input");
  input.type = "text";
  input.id = placeholder;
  input.name = placeholder;

  formContainer.appendChild(label);
  formContainer.appendChild(input);
  formContainer.appendChild(document.createElement("br"));
});

function generateDocument() {
  let filledDocument = documentText;

  placeholders.forEach((placeholder) => {
    const input = document.getElementById(placeholder);
    const value = input.value;
    filledDocument = filledDocument.replaceAll(placeholder, value);
  });

  documentPreview.innerText = filledDocument;
}
