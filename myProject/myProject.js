let projectList = [
    {
        projName : "Law Dumbways Mobile App - 2021",
        projStart : "2021-02-03",
        projEnd : "2021-05-03",
        projTech: ["Node JS", "Next JS", "React JS", "TypeScript"],
        projDesc : "App that used for dumbways student, it was deployed and can downloaded on playstore.App that used for dumbways student, it was deployed and can downloaded on playstore.App that used for dumbways student, it was deployed and can downloaded on playstore.it was deployed and can downloaded on playstore.it was deployed and can downloaded on playstore.",
        projImage : "law.jpeg"
    },
    {
        projName : "Itachi Dumbways Mobile App - 2021",
        projStart : "2021-02-03",
        projEnd : "2021-05-03",
        projTech: ["Node JS", "Next JS", "React JS", "TypeScript"],
        projDesc : "App that used for dumbways student, it was deployed and can downloaded on playstore.",
        projImage : "itachi.jpeg"
    },
    {
        projName : "Gojo Dumbways Mobile App - 2021",
        projStart : "2021-02-03",
        projEnd : "2021-05-03",
        projTech: ["Node JS", "Next JS", "React JS", "TypeScript"],
        projDesc : "App that used for dumbways student, it was deployed and can downloaded on playstore.",
        projImage : "gojosatoru.jpeg"
    },
    {
        projName : "Sukuna Dumbways Mobile App - 2021",
        projStart : "2021-02-03",
        projEnd : "2021-05-03",
        projTech: ["Node JS", "Next JS", "React JS", "TypeScript"],
        projDesc : "App that used for dumbways student, it was deployed and can downloaded on playstore.",
        projImage : "sukuna.jpeg"
    },
    {
        projName : "Spiderman Dumbways Mobile App - 2021",
        projStart : "2021-02-03",
        projEnd : "2021-03-03",
        projTech: ["Node JS", "Next JS", "React JS", "TypeScript"],
        projDesc : "App that used for dumbways student, it was deployed and can downloaded on playstore.",
        projImage : "spiderman.jpeg"
    },
]

function redirectToProjectDetails(index) {
  const project = projectList[index];
  const projectName = project.projName;
  const projStart = project.projStart;
  const projEnd = project.projEnd;
  const projTech = project.projTech.join(','); // Convert array to comma-separated string
  const projDesc = project.projDesc;
  const projImage = project.projImage;

  const url = `detailProject/detailProject.html?name=${encodeURIComponent(projectName)}&projStart=${encodeURIComponent(projStart)}&projEnd=${encodeURIComponent(projEnd)}&projTech=${encodeURIComponent(projTech)}&projDesc=${encodeURIComponent(projDesc)}&projImage=${encodeURIComponent(projImage)}`;
  window.location.href = url;
}

function calculateDuration(startDate, endDate) {
    var start = new Date(startDate);
    var end = new Date(endDate);
    var durationInMs = end - start;

    var years = Math.floor(durationInMs / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor((durationInMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((durationInMs % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    var formattedDuration = '';

    if (years > 0) {
      formattedDuration += years + ' tahun';
      formattedDuration += ' ';
    }

    if (months > 0) {
      formattedDuration += months + ' bulan';
      formattedDuration += ' ';
    }

    if (days > 0) {
      formattedDuration += days + ' hari';
    }

    return formattedDuration;
  }

// function redirectToProjectDetails(index) {
//   const projectName = projectList[index].projName;
//   window.location.href = 'project-details.html?name=' + encodeURIComponent(projectName);
// }

function renderItems() {
  var gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";

  projectList.forEach(function(item, index) {
    var gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    var duration = calculateDuration(item.projStart, item.projEnd);

    var htmlContent = `
      <div onclick="redirectToProjectDetails(${index})">
        <div style="width: 100%; height: 300px">
          <img src="../assets/myProjImg/${item.projImage}" alt="${item.projName}" style="width: 100%; height: 300px; border-radius: 10px; box-shadow: 1px 1px 7px rgb(121, 121, 121);">
        </div>

        <div style="margin-top: 15px; max-width: 100%;">
          <h3 style="min-height: 60px; max-height: 60px; display: -webkit-box; -webkit-line-clamp: 2; overflow: hidden; -webkit-box-orient: vertical;">${item.projName}</h3>
          <p style="font-size: 14px; font-weight: 500; color: #6E6E6E;">durasi : ${duration}</p>
          <div style="height: 125px;">
            <p style="margin-top: 20px; font-size: 14px; font-weight: 500; text-align: justify; display: -webkit-box; -webkit-line-clamp: 6; overflow: hidden; -webkit-box-orient: vertical;">${item.projDesc}</p>
          </div>

          <div style="margin: 20px 0px;">
            <img style="width: 35px; height: 35px;" src="../assets/icons/playstore.png">
            <img style="width: 35px; height: 35px; margin: 0px 15px" src="../assets/icons/android.png">
            <img style="width: 35px; height: 35px;" src="../assets/icons/java.png">
          </div>

          <div style="display: grid; display: columns; grid-template-columns: auto auto; gap: 10px;">
            <button class="edit-btn">edit</button>
            <button class="delete-btn">delete</button>
          </div>
        </div>
      </div>
    `;

    gridItem.innerHTML = htmlContent;
    gridContainer.appendChild(gridItem);
  });
}

function addProject(event){
  event.preventDefault();

  let projectName = document.getElementById("projName").value;
  let projectStart = document.getElementById("projStartDate").value;
  let projectEnd = document.getElementById("projEndDate").value;
  let projectDesc = document.getElementById("projDesc").value;
  let projectImage = document.getElementById("projImg").value;

  let selectedTech = [];

  if (document.getElementById("nextJS").checked) {
    selectedTech.push("nextJS");
  }
  if (document.getElementById("nodeJS").checked) {
    selectedTech.push("nodeJS");
  }
  if (document.getElementById("reactJS").checked) {
    selectedTech.push("reactJS");
  }
  if (document.getElementById("typeScript").checked) {
    selectedTech.push("typeScript");
  }

  projectList.push({
    projName: projectName,
    projStart: projectStart,
    projEnd: projectEnd,
    projDesc: projectDesc,
    projImage: projectImage,
    projTech: selectedTech,
  })

  renderItems();
  console.log(projectList);
}

renderItems();