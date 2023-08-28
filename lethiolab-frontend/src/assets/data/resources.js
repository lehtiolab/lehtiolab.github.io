/*
The order in the list will determine the order of the tool or course

"resourceType" is the type of the resource, either "course" or "tool"
"resourceName" is the name of the resource
"resourceDescription" is a description of the resource
"resourceImage" is the link to the resource image
"resourceLink" is the link to the resource page
*/
export const resources = 
[   
    {
        "resourceType": "product",
        "resourceName": "Molecular Tumor Board Portal",
        "resourceDescription": "The public version of the MTB portal provides a general framework to interpret the functional and predictive relevance of a given list of gene variants in interactive reports.",
        "resourceImage": "https://mtbp.org/assets/img/logo/public/logo-landscape-karolinska-mtb-tone.svg",
        "resourceLink": "https://mtbp.org/",
    },
    {
        "resourceType": "product",
        "resourceName": "FORALL",
        "resourceDescription": "A Resource of Integrative Omics Data of Acute Lymphoblastic Leukemia Cell Lines.",
        "resourceImage": "https://proteomics.se/app_direct/forall_shinyproxy/FORALL.png",
        "resourceLink": "https://proteomics.se/forall/",
    },
    {
        "resourceType": "product",
        "resourceName": "Subcell Barcode",
        "resourceDescription": "An exploratory web portal into subcellular location of proteins.",
        "resourceImage": "images/lehtiolab/SubcellLogo.png",
        "resourceLink": "https://www.subcellbarcode.org/",
    },
    {
        "resourceType": "course",
        "resourceName": "Mass spectrometry-based proteomics: When and How.",
        "resourceDescription": "The aim of this course is to give an overview of mass spectrometry based proteomics for researchers who would like to be able to apply these techniques in their own research.",
        "resourceImage": "https://proteomics.se/app_direct/forall_shinyproxy/KI.png",
        "resourceLink": "https://kiwas.ki.se/katalog/katalog/kurs/5456",
    },
    {
        "resourceType": "course",
        "resourceName": "Omics Data Analysis: From Quantitative Data to Biological Information",
        "resourceDescription": "During recent years omics data has become an integral part of many biomedical and clinical research projects. This broad introductory course aims at bridging the gap between classical biomedical research, omics technologies and bioinformatics. The course will give students an introduction to omics technologies and basic knowledge of omics data analysis workflows.",
        "resourceImage": "https://proteomics.se/app_direct/forall_shinyproxy/KI.png",
        "resourceLink": "https://kiwas.ki.se/katalog/katalog/kurs/6202",
    }
]