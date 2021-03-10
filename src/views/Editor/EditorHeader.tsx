import { EditOutlined, PlayCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Drawer } from 'antd'
import { useMemo, useState } from 'react'

const MenuConfigs = {
    edit: [
        {
            label: '撤销',
            key: 'undo',
            handler: () => {
                console.log('撤销')
            },
        },
        {
            label: '重做',
            key: 'redo',
            handler: () => {
                console.log('重做')
            },
        },
        {
            label: '添加页面',
            key: 'add_page',
            handler: () => {
                console.log('添加页面')
            },
        },
        {
            label: '删除页面',
            key: 'delete_page',
            handler: () => {
                console.log('删除页面')
            },
        },
        {
            label: '打开网格线',
            key: 'open_grid',
            handler: () => {
                console.log('打开网格线')
            },
        },
        {
            label: '重置幻灯片',
            key: 'reset',
            handler: () => {
                console.log('重置幻灯片')
            },
        },
    ],
    display: [
        {
            label: '从头开始',
            key: 'display_from_begin',
            handler: () => {
                console.log('从头开始')
            },
        },
        {
            label: '从当前页开始',
            key: 'display_from_current',
            handler: () => {
                console.log('从当前页开始')
            },
        },
    ],
    help: [
        {
            label: '开发文档',
            key: 'show_doc',
            handler: () => {
                console.log('开发文档')
            },
        },
        {
            label: '快捷键',
            key: 'show_shortcuts',
            handler: () => {
                console.log('快捷键')
            },
        },
    ],
}

interface IListItem {
    label: string
    key: string
    handler: () => void
}

interface IHandlers {
    [key: string]: () => void
}

function generateMenu(list: IListItem[], handlers?: IHandlers) {
    list = list.map((item) => {
        const customHandler = handlers && handlers[item.key] ? handlers[item.key] : item.handler
        return { ...item, handler: customHandler }
    })
    return (
        <Menu>
            {list.map((item) => (
                <Menu.Item key={item.label} onClick={item.handler}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    )
}

export default function EditorHeader() {
    const [drawerVisible, setDrawerVisible] = useState(false)
    const editMenus = useMemo(() => generateMenu(MenuConfigs.edit), [])
    const displayMenus = useMemo(() => generateMenu(MenuConfigs.display), [])
    const helpMenus = useMemo(
        () =>
            generateMenu(MenuConfigs.help, {
                show_shortcuts() {
                    setDrawerVisible(true)
                },
            }),
        [],
    )

    return (
        <div className="flex bg-white border-b border-gray-100 pl-4 pr-4">
            <div className="flex flex-none leading-loose text-sm">
                <div className="cursor-pointer p-2 hover:bg-gray-100">
                    <Dropdown overlay={editMenus} trigger={['click']}>
                        <div className="flex items-center">
                            <EditOutlined className="mr-1" />
                            编辑
                        </div>
                    </Dropdown>
                </div>
                <div className="cursor-pointer p-2 hover:bg-gray-100">
                    <Dropdown overlay={displayMenus} trigger={['click']}>
                        <div className="flex items-center">
                            <PlayCircleOutlined className="mr-1" />
                            演示
                        </div>
                    </Dropdown>
                </div>
                <div className="cursor-pointer p-2 hover:bg-gray-100">
                    <Dropdown overlay={helpMenus} trigger={['click']}>
                        <div className="flex items-center">
                            <QuestionCircleOutlined className="mr-1" />
                            帮助
                        </div>
                    </Dropdown>
                </div>
            </div>
            <div className="flex-grow"></div>
            <div className="flex-none"></div>

            <Drawer title="Basic Drawer" placement="right" closable={false} onClose={() => setDrawerVisible(false)} visible={drawerVisible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}
