/* eslint-disable import/no-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { GenericRenderer } from './'

export default {
  title: 'Deploy Triggers/Components/Generic Renderer',
  component: GenericRenderer,
  argTypes: {},
} as ComponentMeta<typeof GenericRenderer>

const Template: ComponentStory<typeof GenericRenderer> = (args) => (
  <GenericRenderer {...args} />
)

export const Trigger1 = Template.bind({})
Trigger1.args = {
  json: JSON.stringify({
    url: 'https://z3nburns-998.zendesk-staging.com/api/v2/triggers/6734460958845.json',
    id: 6734460958845,
    title: 'Pagination Trigger 54',
    active: true,
    updated_at: '2022-09-12T01:36:11Z',
    created_at: '2022-08-02T00:10:15Z',
    default: false,
    actions: [
      {
        field: 'status',
        value: 'solved',
      },
    ],
    conditions: {
      all: [
        {
          field: 'status',
          operator: 'is',
          value: 'open',
        },
      ],
      any: [],
    },
    description: null,
    position: 1,
    raw_title: 'Pagination Trigger 54',
    category_id: '4754787202301',
  }),
}

export const user1 = Template.bind({})
user1.args = {
  json: JSON.stringify({
    id: 1108019763656,
    url: 'https://z3nburns-998.zendesk-staging.com/api/v2/users/1108019763656.json',
    name: 'Nathan Burns',
    email: 'nburns@zendesk.com',
    created_at: '2022-02-02T03:28:17Z',
    updated_at: '2023-02-21T22:37:25Z',
    time_zone: 'America/New_York',
    iana_time_zone: 'America/New_York',
    phone: null,
    shared_phone_number: null,
    photo: null,
    locale_id: 1,
    locale: 'en-US',
    organization_id: 4754787194109,
    role: 'admin',
    verified: true,
    external_id: null,
    tags: [],
    alias: '',
    active: true,
    shared: false,
    shared_agent: false,
    last_login_at: '2023-02-21T22:37:25Z',
    two_factor_auth_enabled: null,
    signature: '',
    details: '',
    notes: '',
    role_type: 4,
    custom_role_id: 4754778379133,
    moderator: true,
    ticket_restriction: null,
    only_private_comments: false,
    restricted_agent: false,
    suspended: false,
    default_group_id: 4754787193469,
    report_csv: true,
    user_fields: {},
  }),
}

export const automation1 = Template.bind({})
automation1.args = {
  json: JSON.stringify({
    url: 'https://z3nburns-998.zendesk-staging.com/api/v2/automations/4754787210109.json',
    id: 4754787210109,
    title: 'أغلق التذكرة بعد 4 أيام من التاريخ المحدد لحل حالتها',
    active: true,
    updated_at: '2022-12-12T04:11:58Z',
    created_at: '2022-02-02T03:28:26Z',
    default: true,
    actions: [
      {
        field: 'status',
        value: 'closed',
      },
    ],
    conditions: {
      all: [
        {
          field: 'status',
          operator: 'is',
          value: 'solved',
        },
        {
          field: 'SOLVED',
          operator: 'greater_than',
          value: '96',
        },
      ],
      any: [],
    },
    position: 0,
    raw_title: 'أغلق التذكرة بعد 4 أيام من التاريخ المحدد لحل حالتها',
  }),
}

export const webhook1 = Template.bind({})
webhook1.args = {
  json: JSON.stringify({
    id: '01GPD40W0E6C87VMSGG64Z46PE',
    name: 'something else',
    description: 'test webhook',
    status: 'active',
    subscriptions: ['conditional_ticket_events', 'solved_ticket_events'],
    created_at: '2023-01-10T05:56:32Z',
    created_by: '1108019763656',
    updated_at: '2023-02-20T01:30:51Z',
    updated_by: '1108019763656',
    endpoint:
      'https://webhook.site/#!/e2f2c485-b5da-4bd7-b6bf-3b2e3743e50c/187ec438-1e50-4835-8858-a96e84eb0886/1',
    http_method: 'GET',
    request_format: 'json',
  }),
}

export const jsltPreprocessed = Template.bind({})
jsltPreprocessed.args = {
  json: JSON.stringify({
    'Trigger name': 'all actions',
    'Is Active?': true,
    Category: 'Notifications',
    Position: 9999,
    'Meet ALL of the following conditions': [{ 'Status is': 'New' }],
    'Meet ANY of the following conditions': [
      { 'Brand is not': 'TestBrand' },
      { 'Ticket Form changed': '' },
    ],
    Actions: [
      {
        Status: 'Open',
      },
      {
        Brand: 'RealBrand',
      },
      {
        'Org Date': '2021-09-23',
      },
      {
        Target: ['Http Callback ', [['a', 'b']]],
      },
      {
        Webhook: ['A Webhook', 'message'],
      },
    ],
  }),
}
