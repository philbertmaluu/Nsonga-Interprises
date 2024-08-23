import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    message,
    Button,
    Avatar,
    Typography,
    Modal,
    Upload,
    Tabs,
    Form, Input, Space
} from "antd";
import { DeleteOutlined, EditOutlined, ToTopOutlined } from "@ant-design/icons";


import Draggable from 'react-draggable';
import { useRef, useState } from "react";



const face = "https://images.pexels.com/photos/5217897/pexels-photo-5217897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const face2 = "https://images.unsplash.com/photo-1604603815783-2bd94c5a819f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const face3 = "https://images.pexels.com/photos/5218014/pexels-photo-5218014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const face4 = "https://images.pexels.com/photos/7262480/pexels-photo-7262480.jpeg?auto=compress&cs=tinysrgb&w=800";
const face5 = "https://images.pexels.com/photos/5217911/pexels-photo-5217911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const face6 = "https://images.pexels.com/photos/5217911/pexels-photo-5217911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";



const { Title } = Typography;

const formProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
        authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
// table code start

const columns = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
        width: "3%",
    },
    {
        title: "Product",
        dataIndex: "name",
        key: "name",
        width: "32%",
    },
    {
        title: "Category",
        dataIndex: "category",
        key: "category",
    },

    {
        title: "STATUS",
        key: "status",
        dataIndex: "status",
    },

    {
        title: "Inventory",
        key: "employed",
        dataIndex: "employed",
    },

    {
        title: "Actions",
        key: "actions",
        render: (_, record) => (
            <>
                <Button
                    type="text"

                    icon={<EditOutlined style={{ color: 'orange' }} />}
                    onClick={() => handleEdit(record.key)}
                    style={{ padding: 2, width: 'auto' }}
                />
                <Button
                    type="text"
                    icon={<DeleteOutlined style={{ color: 'red' }} />}
                    onClick={() => handleDelete(record.key)}
                    style={{ padding: 0, width: 'auto' }}
                />
            </>

        ),
    },
];

const data = [
    {
        key: "1",
        id: (
            <>
                <div className="author-info">
                    <Title level={5}>#001</Title>
                </div>
            </>
        ),
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={60}
                        src={face2}
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Dishwashing</Title>
                        <p>Nsonga brand 002</p>
                    </div>
                </Avatar.Group>{" "}
            </>
        ),
        category: (
            <>
                <div className="author-info">
                    <p>Category007</p>
                </div>
            </>
        ),
        function: (
            <>
                <div className="author-info">
                    <Title level={5}>Manager</Title>
                    <p>Organization</p>
                </div>
            </>
        ),

        status: (
            <>
                <Button type="primary" className="tag-primary">
                    Availlable
                </Button>
            </>
        ),
        employed: (
            <>
                <div className="ant-employed">
                    <Button type="dashed" >
                        Check
                    </Button>
                </div>
            </>
        ),
    },

    {
        key: "2",
        id: (
            <>
                <div className="author-info">
                    <Title level={5}>#002</Title>
                </div>
            </>
        ),
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={60}
                        src={face3}
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Handwash</Title>
                        <p>Nsonga brand 005</p>
                    </div>
                </Avatar.Group>{" "}
            </>
        ),
        category: (
            <>
                <div className="author-info">
                    <p>Category001</p>
                </div>
            </>
        ),
        function: (
            <>
                <div className="author-info">
                    <Title level={5}>Programator</Title>
                    <p>Developer</p>
                </div>
            </>
        ),

        status: (
            <>
                <Button className="tag-badge">Avallable</Button>
            </>
        ),
        employed: (
            <>
                <div className="ant-employed">
                    <Button type="dashed" >
                        Check
                    </Button>

                </div>
            </>
        ),
    },

    {
        key: "3",
        id: (
            <>
                <div className="author-info">
                    <Title level={5}>#003</Title>
                </div>
            </>
        ),
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={60}
                        src={face}
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Multipurpose</Title>
                        <p>Nsonga brand 001</p>
                    </div>
                </Avatar.Group>{" "}
            </>
        ),
        category: (
            <>
                <div className="author-info">
                    <p>Category004</p>
                </div>
            </>
        ),
        function: (
            <>
                <div className="author-info">
                    <Title level={5}>Executive</Title>
                    <p>Projects</p>
                </div>
            </>
        ),

        status: (
            <>
                <Button type="primary" className="tag-primary">
                    Availlable
                </Button>
            </>
        ),
        employed: (
            <>
                <div className="ant-employed">
                    <Button type="dashed" >
                        Check
                    </Button>
                </div>
            </>
        ),
    },
    {
        key: "4",
        id: (
            <>
                <div className="author-info">
                    <Title level={5}>#004</Title>
                </div>
            </>
        ),
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={60}
                        src={face4}
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Tiles Cleaner</Title>
                        <p>Nsonga brand 002</p>
                    </div>
                </Avatar.Group>{" "}
            </>
        ),
        category: (
            <>
                <div className="author-info">
                    <p>Category001</p>
                </div>
            </>
        ),
        function: (
            <>
                <div className="author-info">
                    <Title level={5}>Marketing</Title>
                    <p>Organization</p>
                </div>
            </>
        ),

        status: (
            <>
                <Button type="primary" className="tag-primary">
                    Availlable
                </Button>
            </>
        ),
        employed: (
            <>
                <div className="ant-employed">
                    <Button type="dashed" >
                        Check
                    </Button>

                </div>
            </>
        ),
    },
    {
        key: "5",
        id: (
            <>
                <div className="author-info">
                    <Title level={5}>#005</Title>
                </div>
            </>
        ),
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={60}
                        src={face5}
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Rust remover</Title>
                        <p>Nsonga brand 002</p>
                    </div>
                </Avatar.Group>{" "}
            </>
        ),
        category: (
            <>
                <div className="author-info">
                    <p>Category005</p>
                </div>
            </>
        ),
        function: (
            <>
                <div className="author-info">
                    <Title level={5}>Manager</Title>
                    <p>Organization</p>
                </div>
            </>
        ),

        status: (
            <>
                <Button className="tag-badge">Unavaillable</Button>
            </>
        ),
        employed: (
            <>
                <div className="ant-employed">
                    <Button type="dashed" >
                        Check
                    </Button>

                </div>
            </>
        ),
    },

    {
        key: "6",
        id: (
            <>
                <div className="author-info">
                    <Title level={5}>#006</Title>
                </div>
            </>
        ),
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={60}
                        src={face6}
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Blood remover</Title>
                        <p>Nsonga brand 006</p>
                    </div>
                </Avatar.Group>{" "}
            </>
        ),
        category: (
            <>
                <div className="author-info">
                    <p>Category001</p>
                </div>
            </>
        ),
        function: (
            <>
                <div className="author-info">
                    <Title level={5}>Tester</Title>
                    <p>Developer</p>
                </div>
            </>
        ),

        status: (
            <>
                <Button className="tag-badge">Unavaillable</Button>
            </>
        ),
        employed: (
            <>
                <div className="ant-employed">
                    <Button type="dashed" >
                        Check
                    </Button>


                </div>
            </>
        ),
    },
];

// Your delete handler function
const handleDelete = (key) => {
    // Logic to delete the row
    console.log('Delete record with key:', key);
    // Add your delete logic here, such as updating the state or calling an API
};

const handleEdit = (key) => {
    console.log('Edit record with key:', key);
}


function Products() {
    // const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    });
    const draggleRef = useRef(null);
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };
    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };



    const [form] = Form.useForm();
    const onFinish = () => {
        message.success('Submit success!');
    };
    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    const onFill = () => {
        form.setFieldsValue({
            url: 'https://taobao.com/',
        });
    };

    const { TextArea } = Input;

    const [size, setSize] = useState('small');
    const onChange = (e) => {
        setSize(e.target.value);
    };

    return (
        <>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs="24" xl={24}>


                        <Modal
                            title={
                                <div
                                    style={{
                                        width: '100%',
                                        cursor: 'move',
                                    }}
                                    onMouseOver={() => {
                                        if (disabled) {
                                            setDisabled(false);
                                        }
                                    }}
                                    onMouseOut={() => {
                                        setDisabled(true);
                                    }}
                                >
                                    Add New Product
                                </div>
                            }

                            width={1000}

                            open={open}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            modalRender={(modal) => (
                                <Draggable
                                    disabled={disabled}
                                    bounds={bounds}
                                    nodeRef={draggleRef}
                                    onStart={(event, uiData) => onStart(event, uiData)}
                                >
                                    <div ref={draggleRef}>{modal}</div>
                                </Draggable>
                            )}
                        >
                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter the product name',
                                                },
                                                {
                                                    type: 'string',
                                                    min: 6,
                                                    message: 'Name must be at least 6 characters long',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Product Name" />
                                        </Form.Item>
                                    </Col>

                                    <Col span={6}>
                                        <Form.Item
                                            name="category"
                                            label="Category"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter the product category',
                                                },
                                                {
                                                    type: 'string',
                                                    min: 6,
                                                    message: 'Category must be at least 6 characters long',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Product Category" />
                                        </Form.Item>
                                    </Col>

                                    <Col span={6}>
                                        <Form.Item
                                            name="brand"
                                            label="Brand"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter the product name',
                                                },
                                                {
                                                    type: 'string',
                                                    min: 6,
                                                    message: 'Name must be at least 6 characters long',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Product Name" />
                                        </Form.Item>
                                    </Col>
                                </Row>


                                <Row gutter={16}>




                                    <Col span={24}>
                                        <div className="uploadfile pb-15 shadow-none">
                                            <Upload {...formProps}>
                                                <Button
                                                    type="dashed"
                                                    className="ant-full-box"
                                                    icon={<ToTopOutlined />}
                                                >
                                                    Upload Image
                                                </Button>
                                            </Upload>
                                        </div>
                                    </Col>
                                </Row>

                                <Row gutter={16}>
                                    <Col span={24}>
                                        <TextArea label="Description" rows={3} placeholder="Product short decription" maxLength={6} />
                                    </Col>
                                </Row>

                                <Row span={24}>

                                    <div className="attributes">
                                        <Tabs
                                            defaultActiveKey="1"
                                            type="card"
                                            size={size}

                                            items={[
                                                {
                                                    label: 'Attributes',
                                                    key: '1',
                                                    children: 'Content of Attributes tab',
                                                },
                                                {
                                                    label: 'Attribute Value',
                                                    key: '2',
                                                    children: 'Content of Attribute Value tab',
                                                },
                                                {
                                                    label: 'Sold As',
                                                    key: '3',
                                                    children: 'Content of Sold As tab',
                                                },
                                                {
                                                    label: 'Price',
                                                    key: '4',
                                                    children: 'Content of Price tab',
                                                },
                                                {
                                                    label: 'Tax',
                                                    key: '5',
                                                    children: 'Content of Tax tab',
                                                },
                                                {
                                                    label: 'Inventory',
                                                    key: '6',
                                                    children: 'Content of Inventory tab',
                                                },
                                            ]}

                                        />
                                    </div>

                                </Row>
                            </Form>
                        </Modal>


                        <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="Products"
                            extra={
                                <>
                                    <Radio.Group onChange={onChange} defaultValue="a">
                                        <Button style={{ backgroundColor: '#0E1573', borderColor: '#0E1573', color: '#fff' }} onClick={showModal}>Add Product</Button>
                                    </Radio.Group>
                                </>
                            }
                        >
                            <div className="table-responsive">
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    pagination={true}
                                    className="ant-border-space"
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Products;
