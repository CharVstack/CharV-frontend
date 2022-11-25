import '@testing-library/jest-dom';
import { server } from '@lib/msw/server'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
  vitest.clearAllMocks()
})

afterAll(() => {
  server.close()
})
