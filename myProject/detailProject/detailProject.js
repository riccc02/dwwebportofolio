const urlParams = new URLSearchParams(window.location.search);
const projectName = urlParams.get('name');
const projectDesc = urlParams.get('projDesc');
const projectImg = urlParams.get('projImage');
const projectStart = urlParams.get('projStart');
const projectEnd = urlParams.get('projEnd')
const projTech = urlParams.get('projTech');

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

var duration = calculateDuration(projectStart, projectEnd);
const projectDetailsDiv = document.getElementById('projectDetails');
projectDetailsDiv.innerHTML = `
    <h1 style="margin-bottom: 40px;">${projectName}</h1>

    <div class="parent">
        <div class="gridImage">
            <img style="width: 800px; height: 100%;" src="../../assets/myProjImg/${projectImg}" alt="" />
        </div>
        <div class="gridDuration">
            <p style="font-size: 22px; font-weight: 600; margin-bottom: 10px;">Duration</p>
            <div style="display: flex; flex-direction: row;">
                <img src="../../../../assets/icons/calendar.png" alt="" style="width: 25px; height: 25px; margin-right: 10px">
                <p style="font-weight: 500;">${projectStart} - ${projectEnd}</p>
            </div>
            <div style="display: flex; flex-direction: row; margin-top: 10px">
                <img src="../../../../assets/icons/time.png" alt="" style="width: 25px; height: 25px; margin-right: 10px"/>
                <p style="font-weight: 500;">${duration}</p>
            </div>
        </div>
        <div class="gridTech">
            <p style="font-size: 22px; font-weight: 600; margin-bottom: 10px;">Technologies</p>
            <div>
                <p style="font-weight: 500;">${projTech}</p>
            </div>
        </div>
    </div>

    <div>
        <p style="margin-top: 20px; font-weight: 500;">${projectDesc}</p>
    </div>
`;
