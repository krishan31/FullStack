package BPM_Work_flow;

import java.util.Map;

import org.activiti.engine.ProcessEngine;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;

public class RuntimeServiceTest extends AbstractTest {
	private static RuntimeService runtimeService;
	
	@BeforeClass
	public static void init() {
		ProcessEngine processEngine =        ///Creates Activiti engine
				ProcessEngineConfiguration
					.createStandaloneInMemProcessEngineConfiguration()
					.buildProcessEngine();
		
		RepositoryService repositoryService =
				processEngine.getRepositoryService();
		repositoryService.createDeployment()
			.addClasspathResource(            ///Deploys Process
					"process/file.bpmn20.xml")
			.delpoy();
		runtimeService = processEngine.getRuntimeService();
		
	
		@Test
		public void startProcessInstance() {
			Map<String, Object> variableMap =
					new Hashmap<String, Object>();
			variableMap.put("money", "5000");
			ProcessInstance processInstance = 
					runtimeService.startProcessInstanceByKey(
							" Order", varibleMap);
			assertNotNull(processInstance.getId());
			System.out.println("id " + processInstance.getId() + " "
					+ processInstance.getProcessDefinationId());
		}
		
		@Test
		public void queryProcessInstance() {
			List<ProcessInstance> instanceList = runtimeService
					.createProcessInstanceQuery()
					.processDefinitionKey("Order")
					.list();
			for(ProcessInstance queryProcessInstance : instanceList) {
				assertEquals(false, queryProcessinstance.isEnded());
				System.out.println("id "+ queryProcessInstance.getId()+ 
						", ended=" + queryProcessInstance.isEnded());
			}
		}
	}
}
