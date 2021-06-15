import React from 'react';

import { connect } from "react-redux";
import * as actions from '../../actions/examAction'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '30px'
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
    },
    answerMarker: {
        backgroundColor:'#99bbff'
    },
    accordion: {
        borderRadius:'20'
    },
  }));
  

const UploadQuestion = ({exam,fileName,fileBase64,genericChange,uploadMyExam}) => {

    const classes = useStyles();

    const getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object

            baseURL = reader.result;

            resolve(baseURL);
          };
          console.log(fileInfo);
        });
    };
    
    const handleFileInputChange = e => {
        console.log(e.target.files[0]);
    
        let file = e.target.files[0];
    
        getBase64(file)
          .then(result => {
            file["base64"] = result;

            genericChange('fileName',file.name)
            genericChange('fileBase64',file.base64.split(",")[1])

            uploadMyExam(file.base64.split(",")[1])
          })
          .catch(err => {
            console.log(err);
          });

    };

    const history = useHistory();

    if(exam.page==='Home'){
        history.push("/");
    }

    return(
        <div className={classes.root}>
            <Button
                className={classes.root}
                variant="contained"
                component="label"
                onChange={handleFileInputChange}
                >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button><br/>
            {fileName?<Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                {fileName} — <strong>check it out!</strong>
            </Alert>:null}

        </div>
    )
}

function mapStateToProps(state) {
    return {exam:state.exam,fileName:state.exam.fileName,fileBase64:state.exam.fileBase64}
}

export default connect(mapStateToProps,actions)(UploadQuestion)