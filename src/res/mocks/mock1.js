export const mock1 = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0ruuy5x" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="17.7.1">
  <bpmn:process id="Process_1h61xdw" isExecutable="false">
    <bpmn:startEvent id="StartEvent_06agyvn" name="start analysis">
      <bpmn:outgoing>Flow_0vip8l9</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Activity_1h0pb78" name="get articles of author=Koval">
      <bpmn:incoming>Flow_0vip8l9</bpmn:incoming>
      <bpmn:outgoing>Flow_11yis75</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0vip8l9" sourceRef="StartEvent_06agyvn" targetRef="Activity_1h0pb78" />
    <bpmn:sequenceFlow id="Flow_11yis75" sourceRef="Activity_1h0pb78" targetRef="Gateway_0rqpxmk" />
    <bpmn:exclusiveGateway id="Gateway_0rqpxmk" name="articles exist">
      <bpmn:incoming>Flow_11yis75</bpmn:incoming>
      <bpmn:outgoing>Flow_1bgc9xt</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:task id="Activity_0w8aky7" name="filter articles by year=2024">
      <bpmn:incoming>Flow_1bgc9xt</bpmn:incoming>
      <bpmn:outgoing>Flow_0gw00df</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_1bgc9xt" sourceRef="Gateway_0rqpxmk" targetRef="Activity_0w8aky7" />
    <bpmn:sequenceFlow id="Flow_0gw00df" sourceRef="Activity_0w8aky7" targetRef="Gateway_179so8c" />
    <bpmn:task id="Activity_0ez0d18" name="sort articles by title=asc">
      <bpmn:incoming>Flow_0bsnxla</bpmn:incoming>
      <bpmn:outgoing>Flow_0rdd7a8</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0bsnxla" sourceRef="Gateway_179so8c" targetRef="Activity_0ez0d18" />
    <bpmn:task id="Activity_1f01wpo" name="filter articles by pages &#60;20">
      <bpmn:incoming>Flow_0xpcp4o</bpmn:incoming>
      <bpmn:outgoing>Flow_1affat1</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0xpcp4o" sourceRef="Gateway_179so8c" targetRef="Activity_1f01wpo" />
    <bpmn:parallelGateway id="Gateway_179so8c">
      <bpmn:incoming>Flow_0gw00df</bpmn:incoming>
      <bpmn:outgoing>Flow_0bsnxla</bpmn:outgoing>
      <bpmn:outgoing>Flow_0xpcp4o</bpmn:outgoing>
    </bpmn:parallelGateway>
    <bpmn:sequenceFlow id="Flow_0rdd7a8" sourceRef="Activity_0ez0d18" targetRef="Gateway_1cglogw" />
    <bpmn:sequenceFlow id="Flow_1affat1" sourceRef="Activity_1f01wpo" targetRef="Gateway_1cglogw" />
    <bpmn:parallelGateway id="Gateway_1cglogw">
      <bpmn:incoming>Flow_0rdd7a8</bpmn:incoming>
      <bpmn:incoming>Flow_1affat1</bpmn:incoming>
      <bpmn:outgoing>Flow_0nrha0e</bpmn:outgoing>
    </bpmn:parallelGateway>
    <bpmn:task id="Activity_0tim4bg" name="get articles author=Koval,another">
      <bpmn:incoming>Flow_0nrha0e</bpmn:incoming>
      <bpmn:outgoing>Flow_0zotoyf</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_0nrha0e" sourceRef="Gateway_1cglogw" targetRef="Activity_0tim4bg" />
    <bpmn:intermediateThrowEvent id="Event_0e2qoef" name="make a report">
      <bpmn:incoming>Flow_0zotoyf</bpmn:incoming>
    </bpmn:intermediateThrowEvent>
    <bpmn:sequenceFlow id="Flow_0zotoyf" sourceRef="Activity_0tim4bg" targetRef="Event_0e2qoef" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1h61xdw">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_06agyvn">
        <dc:Bounds x="156" y="182" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="142" y="225" width="65" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1h0pb78_di" bpmnElement="Activity_1h0pb78">
        <dc:Bounds x="250" y="160" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_12yeo3f_di" bpmnElement="Gateway_0rqpxmk" isMarkerVisible="true">
        <dc:Bounds x="415" y="175" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="409" y="232" width="62" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0w8aky7_di" bpmnElement="Activity_0w8aky7">
        <dc:Bounds x="530" y="160" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ez0d18_di" bpmnElement="Activity_0ez0d18">
        <dc:Bounds x="810" y="80" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1f01wpo_di" bpmnElement="Activity_1f01wpo">
        <dc:Bounds x="810" y="270" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_13mx5d2_di" bpmnElement="Gateway_179so8c">
        <dc:Bounds x="695" y="175" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0xcapy4_di" bpmnElement="Gateway_1cglogw">
        <dc:Bounds x="965" y="185" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0tim4bg_di" bpmnElement="Activity_0tim4bg">
        <dc:Bounds x="1070" y="170" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0e2qoef_di" bpmnElement="Event_0e2qoef">
        <dc:Bounds x="1232" y="192" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1216" y="235" width="69" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0vip8l9_di" bpmnElement="Flow_0vip8l9">
        <di:waypoint x="192" y="200" />
        <di:waypoint x="250" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11yis75_di" bpmnElement="Flow_11yis75">
        <di:waypoint x="350" y="200" />
        <di:waypoint x="415" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1bgc9xt_di" bpmnElement="Flow_1bgc9xt">
        <di:waypoint x="465" y="200" />
        <di:waypoint x="530" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0gw00df_di" bpmnElement="Flow_0gw00df">
        <di:waypoint x="630" y="200" />
        <di:waypoint x="695" y="200" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0bsnxla_di" bpmnElement="Flow_0bsnxla">
        <di:waypoint x="720" y="175" />
        <di:waypoint x="720" y="120" />
        <di:waypoint x="810" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0xpcp4o_di" bpmnElement="Flow_0xpcp4o">
        <di:waypoint x="720" y="225" />
        <di:waypoint x="720" y="310" />
        <di:waypoint x="810" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0rdd7a8_di" bpmnElement="Flow_0rdd7a8">
        <di:waypoint x="910" y="120" />
        <di:waypoint x="990" y="120" />
        <di:waypoint x="990" y="185" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1affat1_di" bpmnElement="Flow_1affat1">
        <di:waypoint x="910" y="310" />
        <di:waypoint x="990" y="310" />
        <di:waypoint x="990" y="235" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0nrha0e_di" bpmnElement="Flow_0nrha0e">
        <di:waypoint x="1015" y="210" />
        <di:waypoint x="1070" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0zotoyf_di" bpmnElement="Flow_0zotoyf">
        <di:waypoint x="1170" y="210" />
        <di:waypoint x="1232" y="210" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
