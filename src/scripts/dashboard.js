import { openAside, steadyCounter } from "./lib.js";

openAside();
grading();

function grading(){
    let objArr = [];
    let quartiles = Array.from({length: 5}, () => (
        {
            credits: 0,
            grades: [],           
        })
    );
    let totalCredits = 0;
    tableFunc();
    
    function tableFunc(){
        let exams = document.querySelectorAll('.exam');
        for(const exam of exams){
            let obj = {};
            obj.exam = exam;
            obj.ec= null;
            obj.grade = null;
            
            let children = exam.children.length;
            if (children <= 3) {
                obj.ec = exam.children[1];
                obj.grade = exam.children[2];
            }else{
                obj.ec = exam.children[3];
                obj.grade = exam.children[4];
            }
            
            obj.grade.addEventListener('click', dataHandler)
        }
    }

    function dataHandler(e){
        let grade = prompt(`Enter the grade you received for the selected exam`, 10);
        let gradeElement = e.target;
        let credits = Number(e.target.previousElementSibling.textContent);
        console.log(credits);
        
        
        if (grade != null && grade > 0 && grade <= 10) {
            gradeElement.removeEventListener('click', dataHandler)
            gradeElement.classList.remove("hover:text-lg", "hover:cursor-pointer")
            if(Number(grade) > 5.5){
                gradeElement.classList.add("table-passed");
                steadyCounter(credits);
            } else{
                gradeElement.classList.add("table-not-passed")
            }
            gradeElement.textContent = Number(grade);
        }
    }

    
}