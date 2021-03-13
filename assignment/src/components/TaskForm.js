import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
const { TextArea } = Input;

const TaskForm = ({showTask}) => {
  const [componentSize, setComponentSize] = useState('default');



  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [values,setValues]=useState({name:'',company:'',priority:'',project:'',desc:''})
  const [task,setTask]=useState([])
  const [company,setCompany]=useState('')
  const [project,setProject]=useState('')
  const [priority,setPriority]=useState('')
  const [desc,setDesc]=useState('')
  const [name,setName]=useState('')
 // const [company,setCompany]=useState('')

  useEffect(() => {
    console.log(task);
  }, [task]);

  const companyHandler =(value)=>{
    setCompany(value)
    console.log(value)
  }

  const projectHandler =(value)=>{
   setProject(value)
    console.log(value)
  }

  const priorityHandler =(value)=>{
  setPriority(value)
    console.log(value)
  }

  const descHandler =(event)=>{
   setDesc(event.target.value)
    console.log(event.target.value)
  }

  const nameHandler =(event)=>{
    setName(event.target.value)
     console.log(event.target.value)
   }

   const submitHandler = (event)=>{
     setValues(values.name=name,values.company=company,values.priority=priority,values.project=project,values.desc=desc)
     console.log(values)
     setTask([...task,values])
     console.log(task)
     setValues({name:'',company:'',priority:'',project:'',desc:''})
     showTask(task);

   }

   const resetHandler = ()=>{
   setName('')
   setCompany('')
   setProject('')
   setPriority('')
   setDesc('')
  }

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}

      >
        
        <Form.Item label="Task Name" onChange = {nameHandler} value={name}>
          <Input />
        </Form.Item>
        <Form.Item label="Company">
          <Select  onSelect = {companyHandler} value={company} >
            <Select.Option value="Company 1">Company 1</Select.Option>
            <Select.Option value="Company 2">Company 2</Select.Option>
            <Select.Option value="Company 3">Company 3</Select.Option>
            <Select.Option value="Company 4">Company 4</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Project">
          <Select onSelect = {projectHandler} value={project}>
            <Select.Option value="Project 1">Project 1</Select.Option>
            <Select.Option value="Project 2">Project 2</Select.Option>
            <Select.Option value="Project 3">Project 3</Select.Option>
            <Select.Option value="Project 4">Project 4</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Priority">
          <Select onSelect = {priorityHandler} value={priority}>
            <Select.Option value="High">High</Select.Option>
            <Select.Option value="Medium">Medium</Select.Option>
            <Select.Option value="Low">Low</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Description" placeholder='Enter task description'>
        <TextArea rows={4} onChange = {descHandler} value={desc}/>
        </Form.Item>
        
        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick = {submitHandler}>
          Submit
        </Button>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="Reset" onClick ={resetHandler}>
          Reset
        </Button>
      </Form.Item>

      </Form>
    </>
  );
};

export default TaskForm

