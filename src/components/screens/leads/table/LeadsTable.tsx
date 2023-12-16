import React from 'react'
import { useSelectors } from 'src/hooks/useSelectors'
import { TLeadsProps } from './LeadsTable.types'
import { TLeads } from 'src/store/leads/Leads.types'
import type { ColumnsType } from 'antd/es/table'
import UiTable from 'src/components/ui/table/UiTable'
import { BsPencilSquare } from 'react-icons/bs'
import { IoTrashOutline } from 'react-icons/io5'
import { UiButton } from 'src/components/ui'

const LeadsTable: React.FC<TLeadsProps> = ({ page, setPage }) => {
	const { leads, leadsTotal } = useSelectors()

	const handleChangePage = (event: number) => setPage(event)

	const columns: ColumnsType<TLeads> = [
		{
			title: 'ФИО',
			dataIndex: 'first_name',
		},
		{
			title: 'ФИО',
			dataIndex: 'last_name',
		},
		{
			title: 'Телефон',
			dataIndex: 'phone',
		},
		{
			title: 'Билеты',
			dataIndex: 'tickets',
			render: () => <div>билет</div>,
		},
		{
			title: 'Действия',
			dataIndex: 'actions',
			render: () => (
				<div className='flex items-center gap-2'>
					<UiButton>
						<BsPencilSquare size='22' />
					</UiButton>
					<UiButton>
						<IoTrashOutline size='22' />
					</UiButton>
				</div>
			),
		},
	]

	return (
		<>
			<UiTable
				columns={columns}
				dataSource={leads}
				pagination={{
					total: leadsTotal,
					current: page,
					showSizeChanger: false,
					defaultPageSize: 10,
					onChange: handleChangePage,
				}}
				rowKey={e => e.id}
				scroll={{ x: true }}
				size='small'
				bordered
			/>
		</>
	)
}

export { LeadsTable }
