import Sidebar from '../../components/server/sidebar/Sidebar'

export default function TemporaryDrawer({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      { children }
    </Sidebar>
  )
}